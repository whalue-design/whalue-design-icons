// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import IssuesCloseOutlinedSvg from '@whalue-design/icons-svg/lib/asn/IssuesCloseOutlined';

export default {
  name: 'IconIssuesCloseOutlined',
  displayName: 'IssuesCloseOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: IssuesCloseOutlinedSvg } },
      children,
    ),
};