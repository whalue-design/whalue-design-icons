// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PullRequestOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PullRequestOutlined';

export default {
  name: 'IconPullRequestOutlined',
  displayName: 'PullRequestOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PullRequestOutlinedSvg } },
      children,
    ),
};