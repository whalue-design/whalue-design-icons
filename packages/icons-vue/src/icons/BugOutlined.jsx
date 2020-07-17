// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BugOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BugOutlined';

export default {
  name: 'IconBugOutlined',
  displayName: 'BugOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BugOutlinedSvg } },
      children,
    ),
};