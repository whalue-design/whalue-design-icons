// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GitlabOutlinedSvg from '@whalue-design/icons-svg/lib/asn/GitlabOutlined';

export default {
  name: 'IconGitlabOutlined',
  displayName: 'GitlabOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GitlabOutlinedSvg } },
      children,
    ),
};